package pl.nowosielski.yourCashFlowserver.controllers;

import org.springframework.web.bind.annotation.*;
import pl.nowosielski.yourCashFlowserver.models.User;
import pl.nowosielski.yourCashFlowserver.repository.UserRepository;

import java.util.ArrayList;

/**
 * Created by panowosielski on 2019-02-14.
 */

@RestController
@RequestMapping(value = "/api/your-cashflow-server/user")
public class UserController {

    private ArrayList<User> users;
    private UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @RequestMapping(method = RequestMethod.POST)
    public User createUser(@RequestBody User user){
        userRepository.save(user);
        return user;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public User deleteUser(@PathVariable Long id) {
        User user = userRepository.findById(id).get();
        userRepository.delete(user);
        return user;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ArrayList<User> findUsers(){
        users = new ArrayList<>();
        userRepository.findAll().forEach(u -> users.add(u));
        return users;
    }
}
