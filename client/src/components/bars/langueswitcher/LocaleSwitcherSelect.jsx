"use client";
import { TfiWorld } from "react-icons/tfi";
import React, { useState, useTransition, useEffect, useRef } from "react";
import { setUserLocale } from "@/services/locale";
import { Button } from "antd";

export default function LocaleSwitcherSelect({ defaultValue, items, label }) {
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Set initial selected label based on defaultValue
    const defaultItem = items.find((item) => item.value === defaultValue);
    setSelectedLabel(defaultItem ? defaultItem.label : "");
  }, [defaultValue, items]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleItemClick(value, label) {
    startTransition(() => {
      setUserLocale(value);
    });
    setSelectedLabel(label);
    setIsOpen(false);
  }

  return (
    <div ref={dropdownRef} className="locale-switcher">
      <Button type="primary"  className="locale-switcher__toggle" onClick={() => setIsOpen(!isOpen)}>
        <TfiWorld />
        <span className="locale-switcher__label">{selectedLabel || label}</span>
      </Button>
      {isOpen && (
        <div className="locale-switcher__dropdown">
          {items.map((item) => (
            <div
              key={item.value}
              className="locale-switcher__item"
              onClick={() => handleItemClick(item.value, item.label)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
