package pl.nowosielski.yourCashFlowserver.models;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by panowosielski on 2019-02-14.
 */

@Entity
@Table(name="expanses")
public class Expanse {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "category_id")
    private Long categoryId;

    @Column(name = "describtion")
    private String describtion;

    @Column(name = "amount")
    private Double amount;

    @Column(name = "date_of_transaction")
    private Date dateOfTransaction;

    public Expanse() {
    }

    public Expanse(String name, Long categoryId, String describtion, Double amount, Date dateOfTransaction) {
        this.name = name;
        this.categoryId = categoryId;
        this.describtion = describtion;
        this.amount = amount;
        this.dateOfTransaction = dateOfTransaction;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public String getDescribtion() {
        return describtion;
    }

    public Double getAmount() {
        return amount;
    }

    public Date getDateOfTransaction() {
        return dateOfTransaction;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public void setDescribtion(String describtion) {
        this.describtion = describtion;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public void setDateOfTransaction(Date dateOfTransaction) {
        this.dateOfTransaction = dateOfTransaction;
    }
}
