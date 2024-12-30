package com.ajaxphone.service;

import com.ajaxphone.model.Smartphone;

import java.util.Optional;

public interface ISmartphoneService
{
    Iterable<Smartphone> findAll();

    Optional<Smartphone> findById(Long id);

    Smartphone save(Smartphone smartPhone);

    void remove(Long id);
}
