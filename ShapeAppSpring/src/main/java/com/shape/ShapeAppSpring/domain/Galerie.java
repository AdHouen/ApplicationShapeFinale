package com.shape.ShapeAppSpring.domain;

import java.io.Serializable;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="GALERIE")
public class Galerie implements Serializable {
	
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "GALERIEID")
	private Long galerieId;
	
	@Column(name = "GALLERIEFILENAME")
	private String galleriefilename;
	@Column(name = "GALLERIE_DATE")
	private LocalDate date;
	@Column(name = "UID")
	private Long uid;
	
	// GETTER
	
	public Long getGalerieId() {
		return galerieId;
	}
	public String getGalleriefilename() {
		return galleriefilename;
	}
	public LocalDate getDate() {
		return date;
	}
	public Long getUid() {
		return uid;
	}
	
	// SETTER
	
	public void setGalerieId(Long galerieId) {
		this.galerieId = galerieId;
	}
	public void setGalleriefilename(String galleriefilename) {
		this.galleriefilename = galleriefilename;
	}
	public void setDate(LocalDate date) {
		this.date = date;
	}
	public void setUid(Long uid) {
		this.uid = uid;
	}
	
	// CONSTRUCTOR
	
	public Galerie() {
		super();
	}
	public Galerie(Long galerieId, String galleriefilename, LocalDate date, Long uid) {
		super();
		this.galerieId = galerieId;
		this.galleriefilename = galleriefilename;
		this.date = date;
		this.uid = uid;
	}





	
	

}
