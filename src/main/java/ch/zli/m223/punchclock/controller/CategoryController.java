package ch.zli.m223.punchclock.controller;

import ch.zli.m223.punchclock.domain.Category;
import ch.zli.m223.punchclock.repository.CategoryRepository;
import ch.zli.m223.punchclock.service.CategoryService;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {
    private CategoryService categoryService;
    private CategoryRepository categoryRepository;

    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public CategoryController(CategoryService categoryService)
    {
        this.categoryService = categoryService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Category> getAllCategory()
    {
        return categoryService.findAll();
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Category getCategoryById(@PathVariable("id") long id){ return categoryService.getCategoryById(id); }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Category createCategory(@Valid @RequestBody Category category)
    {
        return categoryService.createCategory(category);
    }

    @DeleteMapping
    @ResponseStatus(HttpStatus.OK)
    public void deleteCategory(@Valid @RequestBody long id)
    {
        categoryService.deleteCategory(id);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.OK)
    public Category updateCategory(@Valid @RequestBody Category category)
    {
        return categoryService.updateCategory(category);
    }
}
