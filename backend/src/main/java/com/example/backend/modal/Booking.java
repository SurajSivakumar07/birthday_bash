package com.example.backend.modal;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="Booking")
public class Booking {

    @Id
    
    private int id;
    private String img;
    private String venue;
    private String theme;
    private String addOn;
    private int people;
    private String cakeReq;
    private String duration;
    private String invitation;
    private Date data;
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
    public String getVenue() {
        return venue;
    }
    public void setVenue(String venue) {
        this.venue = venue;
    }
    public String getTheme() {
        return theme;
    }
    public void setTheme(String theme) {
        this.theme = theme;
    }
    public String getAddOn() {
        return addOn;
    }
    public void setAddOn(String addOn) {
        this.addOn = addOn;
    }
    public int getPeople() {
        return people;
    }
    public void setPeople(int people) {
        this.people = people;
    }
    public String getCakeReq() {
        return cakeReq;
    }
    public void setCakeReq(String cakeReq) {
        this.cakeReq = cakeReq;
    }
    public String getDuration() {
        return duration;
    }
    public void setDuration(String duration) {
        this.duration = duration;
    }
    public String getInvitation() {
        return invitation;
    }
    public void setInvitation(String invitation) {
        this.invitation = invitation;
    }
    public Date getData() {
        return data;
    }
    public void setData(Date data) {
        this.data = data;
    }
    public Booking() {
    }

    
    
}
