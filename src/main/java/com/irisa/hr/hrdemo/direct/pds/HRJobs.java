package com.irisa.hr.hrdemo.direct.pds;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "JOBS", schema = "HR", catalog = "")
public class HRJobs {
    private String jobId;
    private String jobTitle;
    private Long minSalary;
    private Long maxSalary;

    @Id
    @Column(name = "JOB_ID")
    public String getJobId() {
        return jobId;
    }

    public void setJobId(String jobId) {
        this.jobId = jobId;
    }

    @Basic
    @Column(name = "JOB_TITLE")
    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    @Basic
    @Column(name = "MIN_SALARY")
    public Long getMinSalary() {
        return minSalary;
    }

    public void setMinSalary(Long minSalary) {
        this.minSalary = minSalary;
    }

    @Basic
    @Column(name = "MAX_SALARY")
    public Long getMaxSalary() {
        return maxSalary;
    }

    public void setMaxSalary(Long maxSalary) {
        this.maxSalary = maxSalary;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        HRJobs hrJobs = (HRJobs) o;
        return Objects.equals(jobId, hrJobs.jobId) &&
                Objects.equals(jobTitle, hrJobs.jobTitle) &&
                Objects.equals(minSalary, hrJobs.minSalary) &&
                Objects.equals(maxSalary, hrJobs.maxSalary);
    }

    @Override
    public int hashCode() {
        return Objects.hash(jobId, jobTitle, minSalary, maxSalary);
    }

    private Set<HREmployees> employees;

    @OneToMany(fetch = FetchType.LAZY)
    public Set<HREmployees> getEmployees() {
        return employees;
    }

    public void setEmployees(Set<HREmployees> employees) {
        this.employees = employees;
    }


}
