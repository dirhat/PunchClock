package ch.zli.m223.punchclock.service;

import ch.zli.m223.punchclock.domain.User;
import ch.zli.m223.punchclock.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private UserRepository userRepository;

    public UserService(UserRepository userRepository)
    {
        this.userRepository = userRepository;
    }

    public User createUser(User user)
    {
        return userRepository.saveAndFlush(user);
    }

    public void deleteUser(long id)
    {
        userRepository.deleteById(id);
    }

    public User updateUser(User user)
    {
        return userRepository.saveAndFlush(user);
    }

    public List<User> findAll()
    {
        return userRepository.findAll();
    }

    public boolean checkUser(String username, String password)
    {
        List<User> allUsers = findAll();
        for(User singleUser : allUsers){
            if(singleUser.getUsername() == username && singleUser.getPassword() == password)
            {
                return true;
            }
        }
        return false;
    }

    public User getUserById(long id)
    {
        return userRepository.getOne(id);
    }
}
