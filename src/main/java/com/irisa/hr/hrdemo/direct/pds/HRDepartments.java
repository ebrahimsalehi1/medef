package com.irisa.hr.hrdemo.direct.pds;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "DEPARTMENTS", schema = "HR")
public class HRDepartments {
    private long departmentId;
    private String departmentName;

    @Id
    @Column(name = "DEPARTMENT_ID")
    public long getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(long departmentId) {
        this.departmentId = departmentId;
    }

    @Basic
    @Column(name = "DEPARTMENT_NAME")
    public String getDepartmentName() {
        return departmentName;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        HRDepartments that = (HRDepartments) o;
        return departmentId == that.departmentId &&
                Objects.equals(departmentName, that.departmentName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(departmentId, departmentName);
    }

    private Set<HREmployees> employees;

    @OneToMany(fetch=FetchType.LAZY)
    public Set<HREmployees> getEmployees() {
        return employees;
    }

    public void setEmployees(Set<HREmployees> employees) {
        this.employees = employees;
    }

    private HREmployees manager;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="MANAGER_ID",referencedColumnName = "EMPLOYEE_ID")
    public HREmployees getManager() {
        return manager;
    }

    public void setManager(HREmployees manager) {
        this.manager = manager;
    }
}
