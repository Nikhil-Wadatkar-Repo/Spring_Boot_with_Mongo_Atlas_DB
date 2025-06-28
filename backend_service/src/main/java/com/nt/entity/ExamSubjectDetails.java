package com.nt.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "exam_details")
public class ExamSubjectDetails {
    @Id
    private String examId;
    private String examName;
    private String examMonthYr;
    private String studentId;
    private String sectionId;
    private String subject1Name;
    private Integer subject1ObtMarks;
    private Integer subject1TotMarks;
    private String subject2Name;
    private Integer subject2ObtMarks;
    private Integer subject2TotMarks;
    private String subject3Name;
    private Integer subject3ObtMarks;
    private Integer subject3TotMarks;
    private String subject4Name;
    private Integer subject4ObtMarks;
    private Integer subject4TotMarks;
    private String subject5Name;
    private Integer subject5ObtMarks;
    private Integer subject5TotMarks;
    private String subject6Name;
    private Integer subject6ObtMarks;
    private Integer subject6TotMarks;
    private String subject7Name;
    private Integer subject7ObtMarks;
    private Integer subject7TotMarks;
    private String subject8Name;
    private Integer subject8ObtMarks;
    private Integer subject8TotMarks;
    private String subject9Name;
    private Integer subject9ObtMarks;
    private Integer subject9TotMarks;
    private String subject10Name;
    private Integer subject10ObtMarks;
    private Integer subject10TotMarks;

    private Integer totalMarks;
    private String examResult;

    public String getExamId() {
        return examId;
    }

    public void setExamId(String examId) {
        this.examId = examId;
    }

    public String getExamName() {
        return examName;
    }

    public void setExamName(String examName) {
        this.examName = examName;
    }

    public String getExamMonthYr() {
        return examMonthYr;
    }

    public void setExamMonthYr(String examMonthYr) {
        this.examMonthYr = examMonthYr;
    }

    public String getSubject1Name() {
        return subject1Name;
    }

    public void setSubject1Name(String subject1Name) {
        this.subject1Name = subject1Name;
    }

    public Integer getSubject1ObtMarks() {
        return subject1ObtMarks;
    }

    public void setSubject1ObtMarks(Integer subject1ObtMarks) {
        this.subject1ObtMarks = subject1ObtMarks;
    }

    public Integer getSubject1TotMarks() {
        return subject1TotMarks;
    }

    public void setSubject1TotMarks(Integer subject1TotMarks) {
        this.subject1TotMarks = subject1TotMarks;
    }

    public String getSubject2Name() {
        return subject2Name;
    }

    public void setSubject2Name(String subject2Name) {
        this.subject2Name = subject2Name;
    }

    public Integer getSubject2ObtMarks() {
        return subject2ObtMarks;
    }

    public void setSubject2ObtMarks(Integer subject2ObtMarks) {
        this.subject2ObtMarks = subject2ObtMarks;
    }

    public Integer getSubject2TotMarks() {
        return subject2TotMarks;
    }

    public void setSubject2TotMarks(Integer subject2TotMarks) {
        this.subject2TotMarks = subject2TotMarks;
    }

    public String getSubject3Name() {
        return subject3Name;
    }

    public void setSubject3Name(String subject3Name) {
        this.subject3Name = subject3Name;
    }

    public Integer getSubject3ObtMarks() {
        return subject3ObtMarks;
    }

    public void setSubject3ObtMarks(Integer subject3ObtMarks) {
        this.subject3ObtMarks = subject3ObtMarks;
    }

    public Integer getSubject3TotMarks() {
        return subject3TotMarks;
    }

    public void setSubject3TotMarks(Integer subject3TotMarks) {
        this.subject3TotMarks = subject3TotMarks;
    }

    public String getSubject4Name() {
        return subject4Name;
    }

    public void setSubject4Name(String subject4Name) {
        this.subject4Name = subject4Name;
    }

    public Integer getSubject4ObtMarks() {
        return subject4ObtMarks;
    }

    public void setSubject4ObtMarks(Integer subject4ObtMarks) {
        this.subject4ObtMarks = subject4ObtMarks;
    }

    public Integer getSubject4TotMarks() {
        return subject4TotMarks;
    }

    public void setSubject4TotMarks(Integer subject4TotMarks) {
        this.subject4TotMarks = subject4TotMarks;
    }

    public String getSubject5Name() {
        return subject5Name;
    }

    public void setSubject5Name(String subject5Name) {
        this.subject5Name = subject5Name;
    }

    public Integer getSubject5ObtMarks() {
        return subject5ObtMarks;
    }

    public void setSubject5ObtMarks(Integer subject5ObtMarks) {
        this.subject5ObtMarks = subject5ObtMarks;
    }

    public Integer getSubject5TotMarks() {
        return subject5TotMarks;
    }

    public void setSubject5TotMarks(Integer subject5TotMarks) {
        this.subject5TotMarks = subject5TotMarks;
    }

    public String getSubject6Name() {
        return subject6Name;
    }

    public void setSubject6Name(String subject6Name) {
        this.subject6Name = subject6Name;
    }

    public Integer getSubject6ObtMarks() {
        return subject6ObtMarks;
    }

    public void setSubject6ObtMarks(Integer subject6ObtMarks) {
        this.subject6ObtMarks = subject6ObtMarks;
    }

    public Integer getSubject6TotMarks() {
        return subject6TotMarks;
    }

    public void setSubject6TotMarks(Integer subject6TotMarks) {
        this.subject6TotMarks = subject6TotMarks;
    }

    public String getSubject7Name() {
        return subject7Name;
    }

    public void setSubject7Name(String subject7Name) {
        this.subject7Name = subject7Name;
    }

    public Integer getSubject7ObtMarks() {
        return subject7ObtMarks;
    }

    public void setSubject7ObtMarks(Integer subject7ObtMarks) {
        this.subject7ObtMarks = subject7ObtMarks;
    }

    public Integer getSubject7TotMarks() {
        return subject7TotMarks;
    }

    public void setSubject7TotMarks(Integer subject7TotMarks) {
        this.subject7TotMarks = subject7TotMarks;
    }

    public String getSubject8Name() {
        return subject8Name;
    }

    public void setSubject8Name(String subject8Name) {
        this.subject8Name = subject8Name;
    }

    public Integer getSubject8ObtMarks() {
        return subject8ObtMarks;
    }

    public void setSubject8ObtMarks(Integer subject8ObtMarks) {
        this.subject8ObtMarks = subject8ObtMarks;
    }

    public Integer getSubject8TotMarks() {
        return subject8TotMarks;
    }

    public void setSubject8TotMarks(Integer subject8TotMarks) {
        this.subject8TotMarks = subject8TotMarks;
    }

    public String getSubject9Name() {
        return subject9Name;
    }

    public void setSubject9Name(String subject9Name) {
        this.subject9Name = subject9Name;
    }

    public Integer getSubject9ObtMarks() {
        return subject9ObtMarks;
    }

    public void setSubject9ObtMarks(Integer subject9ObtMarks) {
        this.subject9ObtMarks = subject9ObtMarks;
    }

    public Integer getSubject9TotMarks() {
        return subject9TotMarks;
    }

    public void setSubject9TotMarks(Integer subject9TotMarks) {
        this.subject9TotMarks = subject9TotMarks;
    }

    public String getSubject10Name() {
        return subject10Name;
    }

    public void setSubject10Name(String subject10Name) {
        this.subject10Name = subject10Name;
    }

    public Integer getSubject10ObtMarks() {
        return subject10ObtMarks;
    }

    public void setSubject10ObtMarks(Integer subject10ObtMarks) {
        this.subject10ObtMarks = subject10ObtMarks;
    }

    public Integer getSubject10TotMarks() {
        return subject10TotMarks;
    }

    public void setSubject10TotMarks(Integer subject10TotMarks) {
        this.subject10TotMarks = subject10TotMarks;
    }

    public Integer getTotalMarks() {
        return totalMarks;
    }

    public void setTotalMarks(Integer totalMarks) {
        this.totalMarks = totalMarks;
    }

    public String getExamResult() {
        return examResult;
    }

    public void setExamResult(String examResult) {
        this.examResult = examResult;
    }
}
