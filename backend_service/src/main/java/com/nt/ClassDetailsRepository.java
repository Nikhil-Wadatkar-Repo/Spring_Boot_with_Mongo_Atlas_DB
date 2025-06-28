package com.nt;

import com.nt.entity.ClassDetails;
import com.nt.entity.ExamSubjectDetails;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ClassDetailsRepository extends MongoRepository<ClassDetails, String> {
}
