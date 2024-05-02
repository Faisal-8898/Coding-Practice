package BeanScopeApplication;

import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class BusinessCalculationService {
    private DBServices dbServices;

    public BusinessCalculationService(DBServices dbServices){
        this.dbServices = dbServices;
    }
    int findMax(){
        return Arrays.stream(dbServices.retrieveData()).max().orElse(0);
    }
}
