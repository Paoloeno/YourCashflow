package pl.nowosielski.yourCashFlowserver.controllers;

import org.springframework.web.bind.annotation.*;
import pl.nowosielski.yourCashFlowserver.models.Expanse;
import pl.nowosielski.yourCashFlowserver.repository.ExpanseRepository;

import java.util.ArrayList;

/**
 * Created by panowosielski on 2019-02-19.
 */
@RestController
@RequestMapping(value = "/api/your-cashflow-server/expanse")
public class ExpanseController {

    private ArrayList<Expanse> expanses;
    private ExpanseRepository expanseRepository;

    public ExpanseController(ExpanseRepository expanseRepository) {
        this.expanseRepository = expanseRepository;
    }

    @RequestMapping(method = RequestMethod.POST)
    public Expanse createExpanse(@RequestBody Expanse expanse){
        expanseRepository.save(expanse);
        return expanse;
    }

    @RequestMapping(value = "/findByCategoryId/{id}", method = RequestMethod.GET)
    public ArrayList<Expanse> findExpansesByCategory (@PathVariable Long id) {
        expanses = new ArrayList<Expanse>();
        expanseRepository.findByCategoryId(id).forEach(expanse -> this.expanses.add(expanse));
        System.out.println(expanses);
        return expanses;
    }
}
