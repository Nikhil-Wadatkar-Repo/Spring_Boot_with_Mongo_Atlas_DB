package com.nt.util;

import org.springframework.stereotype.Component;

import java.util.Calendar;

@Component
public class Utility {
    public String getStudentId(String className, String sectionName, String studName) {
        return className + "_" + sectionName + "_" + studName.substring(1, 2);
    }

    public String getSectionId(String className, String sectionName) {
        return className + "_" + sectionName + "_" + (Calendar.getInstance().get(Calendar.MONTH) + 1) + "_" + Calendar.getInstance().get(Calendar.YEAR);
    }

    public String getExamId(String className, String sectionName, String examName) {
        return examName + "_" + className + "_" + sectionName + "_" + (Calendar.getInstance().get(Calendar.MONTH) + 1) + "_" + Calendar.getInstance().get(Calendar.YEAR);

    }
}
