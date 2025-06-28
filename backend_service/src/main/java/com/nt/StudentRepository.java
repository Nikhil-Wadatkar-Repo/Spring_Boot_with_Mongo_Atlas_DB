package com.nt;

import com.nt.entity.Section;
import com.nt.entity.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StudentRepository extends MongoRepository<Student, String> {
}
