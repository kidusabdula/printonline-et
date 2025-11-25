// components/product/FormFields.tsx
"use client";

import { motion } from 'framer-motion';
import { FormField, FormFieldOption } from './ProductFormTypes';
import { Check, ChevronDown } from 'lucide-react';

interface FormFieldProps {
  field: FormField;
  value: any;
  onChange: (value: any) => void;
  disabled?: boolean;
}

export function SelectField({ field, value, onChange, disabled }: FormFieldProps) {
  const options = field.grouped && field.groups
    ? Object.values(field.groups).flat()
    : field.options || [];

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-foreground">
        {field.label}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {field.description && (
        <p className="text-xs text-muted-foreground">{field.description}</p>
      )}
      
      {field.grouped && field.groups ? (
        <select
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <option value="">Select {field.label}</option>
          {Object.entries(field.groups).map(([groupLabel, groupOptions]) => (
            <optgroup key={groupLabel} label={groupLabel}>
              {groupOptions.map((option, optIndex) => (
                <option key={`${groupLabel}-${option.value}-${optIndex}`} value={option.value} disabled={option.disabled}>
                  {option.label}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      ) : (
        <select
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <option value="">Select {field.label}</option>
          {options.map((option, index) => (
            <option key={`${option.value}-${index}`} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export function RadioField({ field, value, onChange, disabled }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-foreground">
        {field.label}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {field.description && (
        <p className="text-xs text-muted-foreground">{field.description}</p>
      )}
      <div className="grid grid-cols-2 gap-3">
        {field.options?.map((option, index) => (
          <motion.button
            key={`${field.key}-${option.value}-${index}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onChange(option.value)}
            disabled={disabled || option.disabled}
            className={`p-3 rounded-lg border-2 text-center transition-all ${
              value === option.value
                ? 'border-primary bg-primary/10 text-primary'
                : 'border-border hover:border-primary/50'
            } ${disabled || option.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <div className="font-medium">{option.label}</div>
            {option.description && (
              <p className="text-xs text-muted-foreground mt-1">{option.description}</p>
            )}
            {option.priceModifier && (
              <p className="text-xs text-primary font-semibold mt-1">
                {option.priceModifier}x price
              </p>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export function RadioVisualField({ field, value, onChange, disabled }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-foreground">
        {field.label}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {field.description && (
        <p className="text-xs text-muted-foreground">{field.description}</p>
      )}
      <div className="grid grid-cols-4 sm:grid-cols-4 gap-3">
        {field.options?.map((option, index) => (
          <motion.button
            key={`${field.key}-${option.value}-${index}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onChange(option.value)}
            disabled={disabled || option.disabled}
            className={`relative p-3 rounded-lg border-2 transition-all ${
              value === option.value
                ? 'border-primary ring-2 ring-primary/30'
                : 'border-border hover:border-primary/50'
            } ${disabled || option.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            title={option.label}
          >
            <div
              className="w-full h-12 rounded-md mb-2"
              style={{ backgroundColor: option.hexColor || '#ccc' }}
            />
            <div className="text-xs font-medium text-center">{option.label}</div>
            {value === option.value && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <Check className="h-3 w-3 text-primary-foreground" />
              </div>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export function CheckboxField({ field, value = [], onChange, disabled }: FormFieldProps) {
  const handleChange = (optionValue: string, checked: boolean) => {
    if (checked) {
      onChange([...value, optionValue]);
    } else {
      onChange(value.filter((v: string) => v !== optionValue));
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-foreground">
        {field.label}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {field.description && (
        <p className="text-xs text-muted-foreground">{field.description}</p>
      )}
      <div className="space-y-2">
        {field.options?.map((option, index) => {
          const isChecked = value.includes(option.value);
          return (
            <motion.label
              key={`${field.key}-${option.value}-${index}`}
              whileHover={{ scale: 1.02 }}
              className={`flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                isChecked
                  ? 'border-primary bg-primary/10'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => handleChange(option.value, e.target.checked)}
                disabled={disabled || option.disabled}
                className="w-5 h-5 text-primary rounded border-border focus:ring-primary"
              />
              <span className="font-medium">{option.label}</span>
            </motion.label>
          );
        })}
      </div>
    </div>
  );
}

export function MultiSelectField({ field, value = {}, onChange, disabled }: FormFieldProps) {
  const genderStyle = field.affectsField ? value[field.affectsField] : null;
  const options = genderStyle && field.dynamicOptions
    ? field.dynamicOptions[genderStyle] || []
    : field.options || [];

  const handleSizeQuantityChange = (sizeValue: string, quantity: number) => {
    onChange({
      ...value,
      [field.key]: {
        ...(value[field.key] || {}),
        [sizeValue]: quantity,
      },
    });
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-foreground">
        {field.label}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {field.description && (
        <p className="text-xs text-muted-foreground mb-4">{field.description}</p>
      )}
      <div className="space-y-3">
        {options.map((option, index) => {
          const sizeQuantities = value[field.key] || {};
          const quantity = sizeQuantities[option.value] || 0;
          return (
            <div
              key={`${field.key}-${option.value}-${index}`}
              className="flex items-center justify-between p-3 rounded-lg border border-border bg-card"
            >
              <span className="font-medium">{option.label}</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleSizeQuantityChange(option.value, Math.max(0, quantity - 1))}
                  disabled={disabled || quantity === 0}
                  className="w-8 h-8 rounded border border-border hover:bg-secondary transition-colors disabled:opacity-50"
                >
                  -
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => handleSizeQuantityChange(option.value, quantity + 1)}
                  disabled={disabled}
                  className="w-8 h-8 rounded border border-border hover:bg-secondary transition-colors disabled:opacity-50"
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

