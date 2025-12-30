package com.pomodoro.service;

import org.springframework.stereotype.Service;

@Service
public class TimerService {
    private static final int DEFAULT_MINUTES = 25;

    public int getDefaultMinutes() {
        return DEFAULT_MINUTES;
    }

    public boolean isValidDuration(int minutes) {
        return minutes > 0 && minutes <= 180; // Allow 1 to 180 minutes
    }
}
