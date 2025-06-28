package com.nt;

import com.nt.entity.ClassDetails;
import com.nt.entity.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ClassRepo extends MongoRepository<ClassDetails, String> {
}
