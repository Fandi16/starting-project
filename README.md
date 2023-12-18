# Callback untuk menyimpan model berdasarkan akurasi validasi
model_save_callback = ModelCheckpoint(
    'models/model_{val_accuracy:.3f}.h5',
    save_best_only=True,  # Hanya menyimpan model terbaik
    monitor='val_accuracy',
    mode='max',  # Mode 'max' untuk mencari nilai maksimal (akurasi validasi dalam hal ini)
    verbose=1
)

# Inisialisasi metrik, termasuk 'val_accuracy' kali ini
model.compile(optimizer=Adam(),
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])


# Pelatihan!
history = model.fit(
    train_generator,
    steps_per_epoch=train_generator.n // train_generator.batch_size,
    epochs=20,
    validation_data=val_generator,
    validation_steps=val_generator.n // val_generator.batch_size,
    callbacks=[model_save_callback]
)
