package pl.nowosielski.yourCashFlowserver.repository;

import org.springframework.data.repository.CrudRepository;
import pl.nowosielski.yourCashFlowserver.models.User;

import java.util.Optional;

/**
 * Created by panowosielski on 2019-02-14.
 */
public interface UserRepository extends CrudRepository<User, Long>{

}
