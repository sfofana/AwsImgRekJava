//package com.sfofana.app.component;
//
//import org.aspectj.lang.ProceedingJoinPoint;
//import org.aspectj.lang.annotation.Around;
//import org.aspectj.lang.annotation.Aspect;
//import org.aspectj.lang.annotation.Pointcut;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.stereotype.Component;
//
//import com.sfofana.app.exception.BusinessException;
//
//@Aspect
//@Component
//public class LoggingAdvice {
//	
//	Logger log = LoggerFactory.getLogger(LoggingAdvice.class);
//	
//	@Pointcut(value="execution(* com.sfofana.app.controller.*.*(..)) || "
//			+ "execution(* com.sfofana.app.service.*.*(..)) ||"
//			+ "execution(* com.sfofana.app.exception.*.*(..)) ||"
//			+ "execution(* com.sfofana.app.model.*.*(..)) ||"
//			+ "execution(* com.sfofana.app.util.*.*(..))")
//	public void PointCut() {
//		return;
//	}
//	
//	@Around("PointCut()")
//	public Object applicationLogger(ProceedingJoinPoint joinPoint) throws BusinessException {
//		String methodName = joinPoint.getSignature().getName();
//		String className = joinPoint.getTarget().toString();
//		log.info("["+className+"] : ==================== [ "+methodName+"_Envoked ] ====================");
//
//		Object object;
//		try {
//			object = joinPoint.proceed();
//			log.info("["+className+"] : ====================== [ "+methodName+"_End ] ======================");
//
//		} catch (Throwable e) {
//			throw new BusinessException("Unable to proceed method");
//		}
//		return object;
//	}
//}
