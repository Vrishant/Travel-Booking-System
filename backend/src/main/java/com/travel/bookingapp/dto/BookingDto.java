package com.travel.bookingapp.dto;

import com.travel.bookingapp.enums.EBookingStatus;

public class BookingDto {
    private Long id;
    private String bookingId;
    private String bookingDate;
    private EBookingStatus status;
    private double totalAmount;
    private String serviceName;
    private String userName;

    // Constructors
    public BookingDto() {}

    // Getters/Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getBookingId() { return bookingId; }
    public void setBookingId(String bookingId) { this.bookingId = bookingId; }
    public String getBookingDate() { return bookingDate; }
    public void setBookingDate(String bookingDate) { this.bookingDate = bookingDate; }
    public EBookingStatus getStatus() { return status; }
    public void setStatus(EBookingStatus status) { this.status = status; }
    public double getTotalAmount() { return totalAmount; }
    public void setTotalAmount(double totalAmount) { this.totalAmount = totalAmount; }
    public String getServiceName() { return serviceName; }
    public void setServiceName(String serviceName) { this.serviceName = serviceName; }
    public String getUserName() { return userName; }
    public void setUserName(String userName) { this.userName = userName; }
}
