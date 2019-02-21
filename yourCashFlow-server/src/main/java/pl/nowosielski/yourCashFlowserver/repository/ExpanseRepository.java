package pl.nowosielski.yourCashFlowserver.repository;

import org.springframework.data.repository.CrudRepository;
import pl.nowosielski.yourCashFlowserver.models.Expanse;

import java.util.ArrayList;

/**
 * Created by panowosielski on 2019-02-14.
 */
public interface ExpanseRepository extends CrudRepository<Expanse, Long> {
    public ArrayList<Expanse> findByCategoryId(Long id);
}
