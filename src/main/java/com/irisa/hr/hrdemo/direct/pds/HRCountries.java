package com.irisa.hr.hrdemo.direct.pds;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "COUNTRIES", schema = "HR", catalog = "")
public class HRCountries {
    private String countryId;
    private String countryName;

    @Id
    @Column(name = "COUNTRY_ID")
    public String getCountryId() {
        return countryId;
    }

    public void setCountryId(String countryId) {
        this.countryId = countryId;
    }

    @Basic
    @Column(name = "COUNTRY_NAME")
    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        HRCountries that = (HRCountries) o;
        return Objects.equals(countryId, that.countryId) &&
                Objects.equals(countryName, that.countryName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(countryId, countryName);
    }
}
