package com.nt;

import com.nt.entity.ClassDetails;
import com.nt.entity.Section;
import com.nt.entity.Student;
import com.nt.util.Utility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
@CrossOrigin(origins = "*",allowedHeaders = "*")
@RestController
public class UniversalController {
    @Autowired
    private ExamDetailsRepository examDetailsRepository;
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private SectionRepository sectionRepository;
    @Autowired
    private Utility utility;
    @Autowired private MongoTempt mongoTempt;

    @PostMapping("/createClass")
    public Section createSectionWithClass(@RequestBody Section section) {
        section.setSectionId(utility.getSectionId(section.getClassName(), section.getSectionName()));
        section.setStatus(true);
        section.setSectionStatus(true);
        section.setStudents(new LinkedList<>());
        section.setIntake(10);
        return sectionRepository.save(section);
    }

    @GetMapping("/getAllClass")
    public  List<Section> getAllClass(){
        return sectionRepository.findAll();
    }
    @GetMapping("/deleteClass/{id}")
    public  List<Section> deleteClass(@PathVariable("id")String id){
        sectionRepository.deleteById(id);
        return sectionRepository.findAll();
    }

    @GetMapping("/getPearl/{name}")
    public  List<Section> getPearl(@PathVariable("name")String name){


        return
                sectionRepository.findBySectionName(name);
    }

}
