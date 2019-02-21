package pl.nowosielski.yourCashFlowserver.models;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by panowosielski on 2019-02-14.
 */

@Entity
@Table(name="exp_categories")
public class ExpanseCategory {

    @Id
    @GeneratedValue
    @Column(name="id")
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="user_id")
    private Long userId;

    @Column(name="describtion")
    private String describtion;

    @Column(name="date_of_create")
    private Date dateOfCreate;

    public ExpanseCategory() {
    }

    public ExpanseCategory(String name, Long userId, String describtion, Date dateOfCreate) {
        this.name = name;
        this.userId = userId;
        this.describtion = describtion;
        this.dateOfCreate = dateOfCreate;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Long getUserId() {
        return userId;
    }

    public String getDescribtion() {
        return describtion;
    }

    public Date getDateOfCreate() {
        return dateOfCreate;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public void setDescribtion(String describtion) {
        this.describtion = describtion;
    }

    public void setDateOfCreate(Date dateOfCreate) {
        this.dateOfCreate = dateOfCreate;
    }
}
