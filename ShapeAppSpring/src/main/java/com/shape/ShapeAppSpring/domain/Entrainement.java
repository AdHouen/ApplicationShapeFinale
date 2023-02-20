package com.shape.ShapeAppSpring.domain;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="ENTRAINEMENT")
public class Entrainement implements Serializable{
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ENTRAINEMENTID")
	private Long entrainementId;
	@Column(name = "JOUR")
	private String jour;	
	@Column(name = "SERIE")
	private Integer serie;
	@Column(name = "REPETITION")
	private Integer repetition;
	@Column(name = "POIDS")
	private Integer poids;
	@Column(name = "RECUP")
	private Integer recup;
	@Column(name = "TEMPS")
	private Integer temps;
	@Column(name = "DISTANCE")
	private Integer distance;
	@Column(name = "EXERCICEID")
	private Long exerciceId;
	
	// GETTER
	
	public Long getEntrainementId() {
		return entrainementId;
	}
	public String getJour() {
		return jour;
	}
	public Integer getSerie() {
		return serie;
	}
	public Integer getRepetition() {
		return repetition;
	}
	public Integer getPoids() {
		return poids;
	}
	public Integer getRecup() {
		return recup;
	}
	public Integer getTemps() {
		return temps;
	}
	public Integer getDistance() {
		return distance;
	}
	public Long getExerciceId() {
		return exerciceId;
	}

	
	// SETTER
	
	public void setEntrainementId(Long entrainementId) {
		this.entrainementId = entrainementId;
	}
	public void setJour(String jour) {
		this.jour = jour;
	}
	public void setSerie(Integer serie) {
		this.serie = serie;
	}
	public void setRepetition(Integer repetition) {
		this.repetition = repetition;
	}
	public void setPoids(Integer poids) {
		this.poids = poids;
	}
	public void setRecup(Integer recup) {
		this.recup = recup;
	}
	public void setTemps(Integer temps) {
		this.temps = temps;
	}
	public void setDistance(Integer distance) {
		this.distance = distance;
	}
	public void setExerciceId(Long exerciceId) {
		this.exerciceId = exerciceId;
	}

	
	// CONSTRUCTOR
	
	public Entrainement() {
		super();
	}
	public Entrainement(Long entrainementId, String jour, Integer serie, Integer repetition, Integer poids,
			Integer recup, Integer temps, Integer distance, Long exerciceId) {
		super();
		this.entrainementId = entrainementId;
		this.jour = jour;
		this.serie = serie;
		this.repetition = repetition;
		this.poids = poids;
		this.recup = recup;
		this.temps = temps;
		this.distance = distance;
		this.exerciceId = exerciceId;
	}
	




	
	

	
	
	

	

}
