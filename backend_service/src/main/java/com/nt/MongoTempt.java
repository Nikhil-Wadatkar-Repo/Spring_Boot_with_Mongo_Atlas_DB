package com.nt;

import com.nt.entity.Section;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class MongoTempt {
    @Autowired
    private MongoTemplate mt;

    public List<Section> getSectionsByName(String sectionName){
        return mt.findAll(Section.class, "section_details").stream().filter(item->item.getSectionName().equals(sectionName)).collect(Collectors.toUnmodifiableList());
    }
}
