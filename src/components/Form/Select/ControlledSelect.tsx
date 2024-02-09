import React from 'react';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';
import {TextInputProps} from 'react-native';
import {PickerSelect} from './PickerSelect/PickerSelect';

export function ControlledSelect<FormType extends FieldValues>({
  control,
  name,
  rules,
  label,
  items,
}: UseControllerProps<FormType> &
  TextInputProps & {label?: string; items: {label: string; value: string}[]}) {
  return (
    <Controller
      control={control}
      render={({field, fieldState}) => (
        <PickerSelect
          label={label}
          items={items}
          onChange={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          errorMessage={fieldState.error?.message}
        />
      )}
      name={name}
      rules={rules}
    />
  );
}
