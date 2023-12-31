﻿#nullable disable

using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace backend.Middleware
{
    public class ErrorMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ErrorMiddleware> _logger;

        public ErrorMiddleware(RequestDelegate next, ILogger<ErrorMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred");

                // Create a problem details object
                var problemDetails = new ProblemDetails
                {
                    Title = "An error occurred",
                    Status = context.Response.StatusCode,
                    Detail = ex.Message,
                };

                string responseMessage = JsonSerializer.Serialize(problemDetails);

                // Set the response content
                var statusCode = context.Response.StatusCode;
                context.Response.ContentType = "application/problem+json";
                context.Response.StatusCode = statusCode;
                await context.Response.WriteAsync(responseMessage);
            }
        }
    }
}
