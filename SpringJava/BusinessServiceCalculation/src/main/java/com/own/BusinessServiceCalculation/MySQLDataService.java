package com.own.BusinessServiceCalculation;

import org.springframework.stereotype.Component;

@Component
public class MySQLDataService implements DBServices{
    int[] sqlData = {234, 232, 123, 34};
    public int[] retrieveData(){
        return sqlData;
    }
}
