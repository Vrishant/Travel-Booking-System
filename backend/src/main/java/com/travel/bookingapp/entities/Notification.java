package com.travel.bookingapp.entities;

import com.travel.bookingapp.interfaces.NotificationService;
import java.util.Date;

public class Notification {
    private String message;
    private Date date;

    public Notification(String message) {
        this.message = message;
        this.date = new Date();
    }

    public void send(NotificationService service) {
        service.sendNotification(this.message);
    }
}
