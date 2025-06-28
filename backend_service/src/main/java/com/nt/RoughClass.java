package com.nt;

import java.time.YearMonth;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;

public class RoughClass {
    public static void main(String[] args) {
        System.out.println(
                Calendar.getInstance().get(Calendar.DAY_OF_MONTH)+"_"+(Calendar.getInstance().get(Calendar.MONTH)+1)+"_"+Calendar.getInstance().get(Calendar.YEAR));
    }
}
