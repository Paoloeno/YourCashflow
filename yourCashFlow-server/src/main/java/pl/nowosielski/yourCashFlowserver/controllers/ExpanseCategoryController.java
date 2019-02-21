package pl.nowosielski.yourCashFlowserver.controllers;

import org.springframework.web.bind.annotation.*;
import pl.nowosielski.yourCashFlowserver.models.ExpanseCategory;
import pl.nowosielski.yourCashFlowserver.models.User;
import pl.nowosielski.yourCashFlowserver.repository.ExpanseCategoryRepository;

import java.util.ArrayList;

/**
 * Created by panowosielski on 2019-02-15.
 */
@RestController
@RequestMapping(value = "/api/your-cashflow-server/exp-category")
public class ExpanseCategoryController {

    private ArrayList<ExpanseCategory> categories;
    private ExpanseCategoryRepository expanseCategoryRepository;

    public ExpanseCategoryController(ExpanseCategoryRepository expanseCategoryRepository) {
        this.expanseCategoryRepository = expanseCategoryRepository;
    }

    @RequestMapping(method = RequestMethod.POST)
    public ExpanseCategory createCategory(@RequestBody ExpanseCategory category){
        expanseCategoryRepository.save(category);
        return category;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ExpanseCategory deleteCategory(@PathVariable Long id) {
        ExpanseCategory category = expanseCategoryRepository.findById(id).get();
        expanseCategoryRepository.delete(category);
        return category;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ArrayList<ExpanseCategory> findCategories(){
        categories = new ArrayList<>();
        expanseCategoryRepository.findAll().forEach(u -> categories.add(u));
        return categories;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ExpanseCategory findCategory(@PathVariable Long id){
        ExpanseCategory category = expanseCategoryRepository.findById(id).get();
        return category;
    }
}
