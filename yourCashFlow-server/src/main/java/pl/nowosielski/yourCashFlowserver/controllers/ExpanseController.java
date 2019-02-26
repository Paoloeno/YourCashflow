package pl.nowosielski.yourCashFlowserver.controllers;

import org.springframework.web.bind.annotation.*;
import pl.nowosielski.yourCashFlowserver.models.Expanse;
import pl.nowosielski.yourCashFlowserver.repository.ExpanseRepository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;

/**
 * Created by panowosielski on 2019-02-19.
 */
@RestController
@RequestMapping(value = "/api/your-cashflow-server/expanse")
public class ExpanseController {

    private ArrayList<Expanse> expanses;
    private ExpanseRepository expanseRepository;
    private final long monthInMiliseconds = 2592000000L;
    private long currentTime;
    private Date firstDayOfCurrentMonth;

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

    @RequestMapping(value = "/findByCategoryId/{id}/last-month", method = RequestMethod.GET)
    public ArrayList<Expanse> findLastMonthExpansesByCategory (@PathVariable Long id) {
        expanses = new ArrayList<Expanse>();
        currentTime = new Date().getTime();

        expanseRepository.findByCategoryId(id).forEach(expanse -> {
            if((currentTime - expanse.getDateOfTransaction().getTime()) < monthInMiliseconds)
                this.expanses.add(expanse);
        });
        return expanses;
    }

    @RequestMapping(value = "/findByCategoryId/{id}/this-month", method = RequestMethod.GET)
    public ArrayList<Expanse> findThisMonthExpansesByCategory (@PathVariable Long id) {
        expanses = new ArrayList<Expanse>();
        firstDayOfCurrentMonth = java.sql.Date.valueOf(LocalDate.now().withDayOfMonth(1));

        System.out.println(firstDayOfCurrentMonth);

        expanseRepository.findByCategoryId(id).forEach(expanse -> {
            if(firstDayOfCurrentMonth.getTime() <= expanse.getDateOfTransaction().getTime())
                this.expanses.add(expanse);
            System.out.println(firstDayOfCurrentMonth.getTime() + " " + expanse.getDateOfTransaction().getTime());
        });
        return expanses;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public Expanse deleteCategory(@PathVariable Long id) {
        Expanse expanse = expanseRepository.findById(id).get();
        expanseRepository.delete(expanse);
        return expanse;
    }
}
