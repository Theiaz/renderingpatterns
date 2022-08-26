package com.example.synyxcamp;

import org.springframework.stereotype.Controller;

import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


/**
 * @author  Julian Schäfer - schaefer@synyx.de
 * @since  26.08.22
 */
@Controller
public class RootController {

    @GetMapping("/")
    public String index(@RequestParam String name, Model model) {

        model.addAttribute("name", name);

        return "index";
    }
}
