package com.nt;

import com.nt.entity.ExamSubjectDetails;
import com.nt.entity.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ExamDetailsRepository extends MongoRepository<ExamSubjectDetails, String> {
}
