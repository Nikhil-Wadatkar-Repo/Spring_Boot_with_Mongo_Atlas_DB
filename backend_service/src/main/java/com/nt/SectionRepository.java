package com.nt;

import com.nt.entity.Product;
import com.nt.entity.Section;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface SectionRepository extends MongoRepository<Section, String> {

//    @Query(value = "select")
    public List<Section> findBySectionName(String sectionName);
}
