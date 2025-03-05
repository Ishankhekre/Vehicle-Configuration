package com.example.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "segment") 
public class Segment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "seg_id") // Annotations now aligned with fields
    private int seg_id;

    @Column(name = "seg_name")
    private String seg_name;

    public Segment() {
        // Default constructor
    }

    public int getSegId() {
        return seg_id;
    }

    public void setSegId(int seg_id) {
        this.seg_id = seg_id;
    }

    public String getSegName() {
        return seg_name;
    }

    public void setSegName(String segName) {
        this.seg_name = segName;
    }

    @Override
    public String toString() {
        return "Segment [segId=" + seg_id + ", segName=" + seg_name + "]";
    }
}
