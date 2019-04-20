#!/bin/bash
qlsh -u cassandra -p
for ((i = 567 ; i < 1000 ; i++)); do
   psql \SDC 'SELECT * FROM restaurants WHERE id=$i' > testthing.txt
done