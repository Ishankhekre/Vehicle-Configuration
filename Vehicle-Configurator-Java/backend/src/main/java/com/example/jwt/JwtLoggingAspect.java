package com.example.jwt;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Aspect
@Component
public class JwtLoggingAspect {

	private static final Logger logger = LoggerFactory.getLogger(JwtLoggingAspect.class);

	@Around("execution(* com.example.jwt.JwtService.validateToken(..))")
	public Object logJwtValidation(ProceedingJoinPoint joinPoint) throws Throwable {
		logger.info("### JWT Logging Aspect Initialized ###");

		Object[] args = joinPoint.getArgs();
		String token = (String) args[0];

		logger.info("Validating JWT: " + (token.length() > 10 ? token.substring(0, 10) + "..." : token));

		try {
			Object result = joinPoint.proceed();

			if (result instanceof Boolean && (Boolean) result) {
				logger.info("✅ JWT is valid");
			} else {
				logger.warn("❌ JWT validation failed (invalid token)");
			}

			return result;
		} catch (Exception e) {
			logger.error("❌ JWT validation failed with exception: " + e.getMessage(), e);
			throw e;
		}
	}

}
