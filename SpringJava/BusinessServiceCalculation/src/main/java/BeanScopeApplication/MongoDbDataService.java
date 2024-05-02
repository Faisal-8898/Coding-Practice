package BeanScopeApplication;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
@Primary
public class MongoDbDataService implements DBServices {
    int[] mongoData = {12, 12 , 23, 34, 354};

    public int[] retrieveData(){
        return mongoData;
    }
}
