package com.example.backend.modal;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="venue")
public class VenueModal {
    
    @Id
    private int id;
    private String img;
    private String venueName;
    private String details;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getImg() {
        return img;
    }
    public void setImg(String img) {
        this.img = img;
    }
    public String getVenueName() {
        return venueName;
    }
    public void setVenueName(String venueName) {
        this.venueName = venueName;
    }
    public String getDetails() {
        return details;
    }
    public void setDetails(String details) {
        this.details = details;
    }
    public VenueModal(int id, String img, String venueName, String details) {
        this.id = id;
        this.img = img;
        this.venueName = venueName;
        this.details = details;
    }
    public VenueModal() {
    }
}
