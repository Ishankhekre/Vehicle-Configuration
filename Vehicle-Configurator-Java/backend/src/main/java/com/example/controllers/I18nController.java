package com.example.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

@RestController
public class I18nController {

    @Autowired
    private MessageSource messageSource;
   
    // REST endpoint for greeting
    @GetMapping("/aboutus")
    public List<Map<String, String>> getAboutus(@RequestHeader(name = "Accept-Language", required = false) Locale locale) {
        // If no Accept-Language header is provided, default to English
        if (locale == null) {
            locale = Locale.ENGLISH;
        }
        Map<String, String> response = new HashMap<>();
        response.put("AboutUs", messageSource.getMessage("AboutUs", null, locale));
        response.put("AboutContent", messageSource.getMessage("AboutContent", null, locale));
        response.put("WCU", messageSource.getMessage("WCU", null, locale));
        response.put("WCUContent1", messageSource.getMessage("WCUContent1", null, locale));
        response.put("WCUContent2", messageSource.getMessage("WCUContent2", null, locale));
        // Retrieve the message based on the locale
        return List.of(response);
    }
    
  
}