package ch.zli.m223.punchclock.service;

import ch.zli.m223.punchclock.domain.Category;
import ch.zli.m223.punchclock.repository.CategoryRepository;
import ch.zli.m223.punchclock.repository.EntryRepository;
import ch.zli.m223.punchclock.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    private CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository)
    {
        this.categoryRepository = categoryRepository;
    }

    public Category createCategory(Category category)
    {
        return categoryRepository.saveAndFlush(category);
    }

    public void deleteCategory(long id)
    {
        categoryRepository.deleteById(id);
    }

    public Category updateCategory(Category category)
    {
        return categoryRepository.saveAndFlush(category);
    }

    public List<Category> findAll()
    {
        return categoryRepository.findAll();
    }

    public Category getCategoryById(long id)
    {
        return categoryRepository.getOne(id);
    }
}
