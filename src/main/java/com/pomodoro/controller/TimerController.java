package com.pomodoro.controller;

import com.pomodoro.service.TimerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TimerController {

    private final TimerService timerService;

    @Autowired
    public TimerController(TimerService timerService) {
        this.timerService = timerService;
    }

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("defaultMinutes", timerService.getDefaultMinutes());
        return "index";
    }
}
