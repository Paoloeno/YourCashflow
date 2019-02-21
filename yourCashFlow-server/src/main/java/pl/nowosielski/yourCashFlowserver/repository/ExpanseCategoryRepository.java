package pl.nowosielski.yourCashFlowserver.repository;

import org.springframework.data.repository.CrudRepository;
import pl.nowosielski.yourCashFlowserver.models.ExpanseCategory;

/**
 * Created by panowosielski on 2019-02-14.
 */
public interface ExpanseCategoryRepository extends CrudRepository<ExpanseCategory, Long> {
}
