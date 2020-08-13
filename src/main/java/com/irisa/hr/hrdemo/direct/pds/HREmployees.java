package com.irisa.hr.hrdemo.direct.pds;

import javax.persistence.*;
import java.sql.Time;
import java.util.Collection;
import java.util.Date;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "EMPLOYEES", schema = "HR")
public class HREmployees {
    private long employeeId;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private Date hireDate;
    private Long salary;
    private Long commissionPct;

    @Id
    @Column(name = "EMPLOYEE_ID")
    public long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(long employeeId) {
        this.employeeId = employeeId;
    }

    @Basic
    @Column(name = "FIRST_NAME")
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @Basic
    @Column(name = "LAST_NAME")
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Basic
    @Column(name = "EMAIL")
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Basic
    @Column(name = "PHONE_NUMBER")
    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    @Basic
    @Column(name = "HIRE_DATE")
    public Date getHireDate() {
        return hireDate;
    }

    public void setHireDate(Date hireDate) {
        this.hireDate = hireDate;
    }

    @Basic
    @Column(name = "SALARY")
    public Long getSalary() {
        return salary;
    }

    public void setSalary(Long salary) {
        this.salary = salary;
    }

    @Basic
    @Column(name = "COMMISSION_PCT")
    public Long getCommissionPct() {
        return commissionPct;
    }

    public void setCommissionPct(Long commissionPct) {
        this.commissionPct = commissionPct;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        HREmployees that = (HREmployees) o;
        return employeeId == that.employeeId &&
                Objects.equals(firstName, that.firstName) &&
                Objects.equals(lastName, that.lastName) &&
                Objects.equals(email, that.email) &&
                Objects.equals(phoneNumber, that.phoneNumber) &&
                Objects.equals(hireDate, that.hireDate) &&
                Objects.equals(salary, that.salary) &&
                Objects.equals(commissionPct, that.commissionPct);
    }

    @Override
    public int hashCode() {
        return Objects.hash(employeeId, firstName, lastName, email, phoneNumber, hireDate, salary, commissionPct);
    }

    private HRDepartments departments;
    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="DEPARTMENT_ID",referencedColumnName = "DEPARTMENT_ID")
    public HRDepartments getDepartments(){
        return departments;
    }

    public void setDepartments(HRDepartments departments){
        this.departments = departments;
    }

//    private HRJobs jobs;
//
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "JOB_ID",referencedColumnName = "JOB_ID")
//    public HRJobs getJobs() {
//        return jobs;
//    }
//
//    public void setJobs(HRJobs jobs) {
//        this.jobs = jobs;
//    }

//    private HREmployees manager;
//
//    @ManyToOne(fetch=FetchType.LAZY)
//    @JoinColumn(name="MANAGER_ID",referencedColumnName = "EMPLOYEE_ID")
//    public HREmployees getManager() {
//        return manager;
//    }
//    public void setManager(HREmployees manager) {
//        this.manager = manager;
//    }


//    private Set<HREmployees> employees;
//
//    @OneToMany(fetch = FetchType.LAZY)
//    public Set<HREmployees> getEmployee() {
//        return employees;
//    }
//
//    public void setEmployee(Set<HREmployees> employee) {
//        this.employees = employees;
//    }
//
    private Set<HRDepartments> employeeDepartments;
    @OneToMany(mappedBy = "manager",fetch = FetchType.LAZY)
    public Set<HRDepartments> getEmployeeDepartments() {
        return employeeDepartments;
    }

    public void setEmployeeDepartments(Set<HRDepartments> employeeDepartments) {
        this.employeeDepartments = employeeDepartments;
    }
}
