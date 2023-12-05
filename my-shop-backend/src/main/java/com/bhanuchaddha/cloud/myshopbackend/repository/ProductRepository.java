package com.bhanuchaddha.cloud.myshopbackend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.bhanuchaddha.cloud.myshopbackend.repository.model.Product;

public interface ProductRepository extends MongoRepository<Product, String> {
}

