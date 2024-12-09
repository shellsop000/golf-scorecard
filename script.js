class GolfScorecard {
    constructor() {
        this.courseData = null;
        this.players = [];
        this.maxPlayers = 4;
        this.courseDatabase = {
            "11819": {
                "data": {
                    "id": 11819,
                    "name": "Thanksgiving Point Golf Course",
                    "holes": [
                        {
                            "hole": 1,
                            "teeBoxes": [
                                {"par": 4, "yards": 340, "hcp": 3, "teeType": "pro"},
                                {"par": 4, "yards": 340, "hcp": 3, "teeType": "champion"},
                                {"par": 4, "yards": 315, "hcp": 3, "teeType": "men"},
                                {"par": 4, "yards": 315, "hcp": 3, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 2,
                            "teeBoxes": [
                                {"par": 4, "yards": 373, "hcp": 13, "teeType": "pro"},
                                {"par": 4, "yards": 373, "hcp": 13, "teeType": "champion"},
                                {"par": 4, "yards": 355, "hcp": 13, "teeType": "men"},
                                {"par": 4, "yards": 355, "hcp": 13, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 3,
                            "teeBoxes": [
                                {"par": 4, "yards": 389, "hcp": 15, "teeType": "pro"},
                                {"par": 4, "yards": 389, "hcp": 15, "teeType": "champion"},
                                {"par": 4, "yards": 363, "hcp": 15, "teeType": "men"},
                                {"par": 4, "yards": 363, "hcp": 15, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 4,
                            "teeBoxes": [
                                {"par": 4, "yards": 420, "hcp": 5, "teeType": "pro"},
                                {"par": 4, "yards": 420, "hcp": 5, "teeType": "champion"},
                                {"par": 4, "yards": 398, "hcp": 5, "teeType": "men"},
                                {"par": 4, "yards": 398, "hcp": 5, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 5,
                            "teeBoxes": [
                                {"par": 5, "yards": 534, "hcp": 7, "teeType": "pro"},
                                {"par": 5, "yards": 534, "hcp": 7, "teeType": "champion"},
                                {"par": 5, "yards": 485, "hcp": 7, "teeType": "men"},
                                {"par": 5, "yards": 485, "hcp": 7, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 6,
                            "teeBoxes": [
                                {"par": 4, "yards": 428, "hcp": 1, "teeType": "pro"},
                                {"par": 4, "yards": 428, "hcp": 1, "teeType": "champion"},
                                {"par": 4, "yards": 398, "hcp": 1, "teeType": "men"},
                                {"par": 4, "yards": 398, "hcp": 1, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 7,
                            "teeBoxes": [
                                {"par": 3, "yards": 189, "hcp": 17, "teeType": "pro"},
                                {"par": 3, "yards": 189, "hcp": 17, "teeType": "champion"},
                                {"par": 3, "yards": 165, "hcp": 17, "teeType": "men"},
                                {"par": 3, "yards": 165, "hcp": 17, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 8,
                            "teeBoxes": [
                                {"par": 3, "yards": 210, "hcp": 11, "teeType": "pro"},
                                {"par": 3, "yards": 210, "hcp": 11, "teeType": "champion"},
                                {"par": 3, "yards": 184, "hcp": 11, "teeType": "men"},
                                {"par": 3, "yards": 184, "hcp": 11, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 9,
                            "teeBoxes": [
                                {"par": 5, "yards": 534, "hcp": 9, "teeType": "pro"},
                                {"par": 5, "yards": 534, "hcp": 9, "teeType": "champion"},
                                {"par": 5, "yards": 485, "hcp": 9, "teeType": "men"},
                                {"par": 5, "yards": 485, "hcp": 9, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 10,
                            "teeBoxes": [
                                {"par": 4, "yards": 428, "hcp": 2, "teeType": "pro"},
                                {"par": 4, "yards": 428, "hcp": 2, "teeType": "champion"},
                                {"par": 4, "yards": 398, "hcp": 2, "teeType": "men"},
                                {"par": 4, "yards": 398, "hcp": 2, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 11,
                            "teeBoxes": [
                                {"par": 3, "yards": 189, "hcp": 18, "teeType": "pro"},
                                {"par": 3, "yards": 189, "hcp": 18, "teeType": "champion"},
                                {"par": 3, "yards": 165, "hcp": 18, "teeType": "men"},
                                {"par": 3, "yards": 165, "hcp": 18, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 12,
                            "teeBoxes": [
                                {"par": 5, "yards": 534, "hcp": 8, "teeType": "pro"},
                                {"par": 5, "yards": 534, "hcp": 8, "teeType": "champion"},
                                {"par": 5, "yards": 485, "hcp": 8, "teeType": "men"},
                                {"par": 5, "yards": 485, "hcp": 8, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 13,
                            "teeBoxes": [
                                {"par": 4, "yards": 420, "hcp": 4, "teeType": "pro"},
                                {"par": 4, "yards": 420, "hcp": 4, "teeType": "champion"},
                                {"par": 4, "yards": 398, "hcp": 4, "teeType": "men"},
                                {"par": 4, "yards": 398, "hcp": 4, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 14,
                            "teeBoxes": [
                                {"par": 4, "yards": 389, "hcp": 14, "teeType": "pro"},
                                {"par": 4, "yards": 389, "hcp": 14, "teeType": "champion"},
                                {"par": 4, "yards": 363, "hcp": 14, "teeType": "men"},
                                {"par": 4, "yards": 363, "hcp": 14, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 15,
                            "teeBoxes": [
                                {"par": 4, "yards": 373, "hcp": 12, "teeType": "pro"},
                                {"par": 4, "yards": 373, "hcp": 12, "teeType": "champion"},
                                {"par": 4, "yards": 355, "hcp": 12, "teeType": "men"},
                                {"par": 4, "yards": 355, "hcp": 12, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 16,
                            "teeBoxes": [
                                {"par": 4, "yards": 340, "hcp": 6, "teeType": "pro"},
                                {"par": 4, "yards": 340, "hcp": 6, "teeType": "champion"},
                                {"par": 4, "yards": 315, "hcp": 6, "teeType": "men"},
                                {"par": 4, "yards": 315, "hcp": 6, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 17,
                            "teeBoxes": [
                                {"par": 3, "yards": 210, "hcp": 10, "teeType": "pro"},
                                {"par": 3, "yards": 210, "hcp": 10, "teeType": "champion"},
                                {"par": 3, "yards": 184, "hcp": 10, "teeType": "men"},
                                {"par": 3, "yards": 184, "hcp": 10, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 18,
                            "teeBoxes": [
                                {"par": 5, "yards": 534, "hcp": 16, "teeType": "pro"},
                                {"par": 5, "yards": 534, "hcp": 16, "teeType": "champion"},
                                {"par": 5, "yards": 485, "hcp": 16, "teeType": "men"},
                                {"par": 5, "yards": 485, "hcp": 16, "teeType": "women"}
                            ]
                        }
                    ]
                
            
        
                }
            },
            "18300": {
                "data": {
                    "id": 18300,
                    "name": "Fox Hollow Golf Course",
                    "holes": [
                        {
                            "hole": 1,
                            "teeBoxes": [
                                {"par": 4, "yards": 405, "hcp": 3, "teeType": "pro"},
                                {"par": 4, "yards": 405, "hcp": 3, "teeType": "champion"},
                                {"par": 4, "yards": 395, "hcp": 3, "teeType": "men"},
                                {"par": 4, "yards": 395, "hcp": 3, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 2,
                            "teeBoxes": [
                                {"par": 4, "yards": 388, "hcp": 13, "teeType": "pro"},
                                {"par": 4, "yards": 388, "hcp": 13, "teeType": "champion"},
                                {"par": 4, "yards": 378, "hcp": 13, "teeType": "men"},
                                {"par": 4, "yards": 378, "hcp": 13, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 3,
                            "teeBoxes": [
                                {"par": 3, "yards": 165, "hcp": 15, "teeType": "pro"},
                                {"par": 3, "yards": 165, "hcp": 15, "teeType": "champion"},
                                {"par": 3, "yards": 155, "hcp": 15, "teeType": "men"},
                                {"par": 3, "yards": 155, "hcp": 15, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 4,
                            "teeBoxes": [
                                {"par": 4, "yards": 420, "hcp": 5, "teeType": "pro"},
                                {"par": 4, "yards": 420, "hcp": 5, "teeType": "champion"},
                                {"par": 4, "yards": 410, "hcp": 5, "teeType": "men"},
                                {"par": 4, "yards": 410, "hcp": 5, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 5,
                            "teeBoxes": [
                                {"par": 5, "yards": 528, "hcp": 7, "teeType": "pro"},
                                {"par": 5, "yards": 528, "hcp": 7, "teeType": "champion"},
                                {"par": 5, "yards": 518, "hcp": 7, "teeType": "men"},
                                {"par": 5, "yards": 518, "hcp": 7, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 6,
                            "teeBoxes": [
                                {"par": 4, "yards": 395, "hcp": 1, "teeType": "pro"},
                                {"par": 4, "yards": 395, "hcp": 1, "teeType": "champion"},
                                {"par": 4, "yards": 385, "hcp": 1, "teeType": "men"},
                                {"par": 4, "yards": 385, "hcp": 1, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 7,
                            "teeBoxes": [
                                {"par": 3, "yards": 175, "hcp": 17, "teeType": "pro"},
                                {"par": 3, "yards": 175, "hcp": 17, "teeType": "champion"},
                                {"par": 3, "yards": 165, "hcp": 17, "teeType": "men"},
                                {"par": 3, "yards": 165, "hcp": 17, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 8,
                            "teeBoxes": [
                                {"par": 4, "yards": 410, "hcp": 11, "teeType": "pro"},
                                {"par": 4, "yards": 410, "hcp": 11, "teeType": "champion"},
                                {"par": 4, "yards": 400, "hcp": 11, "teeType": "men"},
                                {"par": 4, "yards": 400, "hcp": 11, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 9,
                            "teeBoxes": [
                                {"par": 5, "yards": 540, "hcp": 9, "teeType": "pro"},
                                {"par": 5, "yards": 540, "hcp": 9, "teeType": "champion"},
                                {"par": 5, "yards": 530, "hcp": 9, "teeType": "men"},
                                {"par": 5, "yards": 530, "hcp": 9, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 10,
                            "teeBoxes": [
                                {"par": 4, "yards": 415, "hcp": 2, "teeType": "pro"},
                                {"par": 4, "yards": 415, "hcp": 2, "teeType": "champion"},
                                {"par": 4, "yards": 405, "hcp": 2, "teeType": "men"},
                                {"par": 4, "yards": 405, "hcp": 2, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 11,
                            "teeBoxes": [
                                {"par": 3, "yards": 185, "hcp": 18, "teeType": "pro"},
                                {"par": 3, "yards": 185, "hcp": 18, "teeType": "champion"},
                                {"par": 3, "yards": 175, "hcp": 18, "teeType": "men"},
                                {"par": 3, "yards": 175, "hcp": 18, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 12,
                            "teeBoxes": [
                                {"par": 5, "yards": 525, "hcp": 8, "teeType": "pro"},
                                {"par": 5, "yards": 525, "hcp": 8, "teeType": "champion"},
                                {"par": 5, "yards": 515, "hcp": 8, "teeType": "men"},
                                {"par": 5, "yards": 515, "hcp": 8, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 13,
                            "teeBoxes": [
                                {"par": 4, "yards": 400, "hcp": 4, "teeType": "pro"},
                                {"par": 4, "yards": 400, "hcp": 4, "teeType": "champion"},
                                {"par": 4, "yards": 390, "hcp": 4, "teeType": "men"},
                                {"par": 4, "yards": 390, "hcp": 4, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 14,
                            "teeBoxes": [
                                {"par": 4, "yards": 380, "hcp": 14, "teeType": "pro"},
                                {"par": 4, "yards": 380, "hcp": 14, "teeType": "champion"},
                                {"par": 4, "yards": 370, "hcp": 14, "teeType": "men"},
                                {"par": 4, "yards": 370, "hcp": 14, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 15,
                            "teeBoxes": [
                                {"par": 4, "yards": 375, "hcp": 12, "teeType": "pro"},
                                {"par": 4, "yards": 375, "hcp": 12, "teeType": "champion"},
                                {"par": 4, "yards": 365, "hcp": 12, "teeType": "men"},
                                {"par": 4, "yards": 365, "hcp": 12, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 16,
                            "teeBoxes": [
                                {"par": 3, "yards": 195, "hcp": 6, "teeType": "pro"},
                                {"par": 3, "yards": 195, "hcp": 6, "teeType": "champion"},
                                {"par": 3, "yards": 185, "hcp": 6, "teeType": "men"},
                                {"par": 3, "yards": 185, "hcp": 6, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 17,
                            "teeBoxes": [
                                {"par": 4, "yards": 430, "hcp": 10, "teeType": "pro"},
                                {"par": 4, "yards": 430, "hcp": 10, "teeType": "champion"},
                                {"par": 4, "yards": 420, "hcp": 10, "teeType": "men"},
                                {"par": 4, "yards": 420, "hcp": 10, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 18,
                            "teeBoxes": [
                                {"par": 5, "yards": 550, "hcp": 16, "teeType": "pro"},
                                {"par": 5, "yards": 550, "hcp": 16, "teeType": "champion"},
                                {"par": 5, "yards": 540, "hcp": 16, "teeType": "men"},
                                {"par": 5, "yards": 540, "hcp": 16, "teeType": "women"}
                            ]
                        }
                    ]
                }
            },
            "19002": {
                "data": {
                    "id": 19002,
                    "name": "Spanish Oaks Golf Course",
                    "holes": [
                        {
                            "hole": 1,
                            "teeBoxes": [
                                {"par": 4, "yards": 380, "hcp": 4, "teeType": "pro"},
                                {"par": 4, "yards": 380, "hcp": 4, "teeType": "champion"},
                                {"par": 4, "yards": 360, "hcp": 4, "teeType": "men"},
                                {"par": 4, "yards": 360, "hcp": 4, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 2,
                            "teeBoxes": [
                                {"par": 4, "yards": 400, "hcp": 8, "teeType": "pro"},
                                {"par": 4, "yards": 400, "hcp": 8, "teeType": "champion"},
                                {"par": 4, "yards": 380, "hcp": 8, "teeType": "men"},
                                {"par": 4, "yards": 380, "hcp": 8, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 3,
                            "teeBoxes": [
                                {"par": 3, "yards": 165, "hcp": 18, "teeType": "pro"},
                                {"par": 3, "yards": 165, "hcp": 18, "teeType": "champion"},
                                {"par": 3, "yards": 145, "hcp": 18, "teeType": "men"},
                                {"par": 3, "yards": 145, "hcp": 18, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 4,
                            "teeBoxes": [
                                {"par": 5, "yards": 530, "hcp": 2, "teeType": "pro"},
                                {"par": 5, "yards": 530, "hcp": 2, "teeType": "champion"},
                                {"par": 5, "yards": 510, "hcp": 2, "teeType": "men"},
                                {"par": 5, "yards": 510, "hcp": 2, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 5,
                            "teeBoxes": [
                                {"par": 4, "yards": 410, "hcp": 12, "teeType": "pro"},
                                {"par": 4, "yards": 410, "hcp": 12, "teeType": "champion"},
                                {"par": 4, "yards": 390, "hcp": 12, "teeType": "men"},
                                {"par": 4, "yards": 390, "hcp": 12, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 6,
                            "teeBoxes": [
                                {"par": 3, "yards": 180, "hcp": 16, "teeType": "pro"},
                                {"par": 3, "yards": 180, "hcp": 16, "teeType": "champion"},
                                {"par": 3, "yards": 160, "hcp": 16, "teeType": "men"},
                                {"par": 3, "yards": 160, "hcp": 16, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 7,
                            "teeBoxes": [
                                {"par": 4, "yards": 420, "hcp": 6, "teeType": "pro"},
                                {"par": 4, "yards": 420, "hcp": 6, "teeType": "champion"},
                                {"par": 4, "yards": 400, "hcp": 6, "teeType": "men"},
                                {"par": 4, "yards": 400, "hcp": 6, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 8,
                            "teeBoxes": [
                                {"par": 5, "yards": 510, "hcp": 14, "teeType": "pro"},
                                {"par": 5, "yards": 510, "hcp": 14, "teeType": "champion"},
                                {"par": 5, "yards": 490, "hcp": 14, "teeType": "men"},
                                {"par": 5, "yards": 490, "hcp": 14, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 9,
                            "teeBoxes": [
                                {"par": 4, "yards": 390, "hcp": 10, "teeType": "pro"},
                                {"par": 4, "yards": 390, "hcp": 10, "teeType": "champion"},
                                {"par": 4, "yards": 370, "hcp": 10, "teeType": "men"},
                                {"par": 4, "yards": 370, "hcp": 10, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 10,
                            "teeBoxes": [
                                {"par": 4, "yards": 400, "hcp": 3, "teeType": "pro"},
                                {"par": 4, "yards": 400, "hcp": 3, "teeType": "champion"},
                                {"par": 4, "yards": 380, "hcp": 3, "teeType": "men"},
                                {"par": 4, "yards": 380, "hcp": 3, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 11,
                            "teeBoxes": [
                                {"par": 5, "yards": 520, "hcp": 1, "teeType": "pro"},
                                {"par": 5, "yards": 520, "hcp": 1, "teeType": "champion"},
                                {"par": 5, "yards": 500, "hcp": 1, "teeType": "men"},
                                {"par": 5, "yards": 500, "hcp": 1, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 12,
                            "teeBoxes": [
                                {"par": 4, "yards": 410, "hcp": 13, "teeType": "pro"},
                                {"par": 4, "yards": 410, "hcp": 13, "teeType": "champion"},
                                {"par": 4, "yards": 390, "hcp": 13, "teeType": "men"},
                                {"par": 4, "yards": 390, "hcp": 13, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 13,
                            "teeBoxes": [
                                {"par": 3, "yards": 170, "hcp": 17, "teeType": "pro"},
                                {"par": 3, "yards": 170, "hcp": 17, "teeType": "champion"},
                                {"par": 3, "yards": 150, "hcp": 17, "teeType": "men"},
                                {"par": 3, "yards": 150, "hcp": 17, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 14,
                            "teeBoxes": [
                                {"par": 4, "yards": 430, "hcp": 7, "teeType": "pro"},
                                {"par": 4, "yards": 430, "hcp": 7, "teeType": "champion"},
                                {"par": 4, "yards": 410, "hcp": 7, "teeType": "men"},
                                {"par": 4, "yards": 410, "hcp": 7, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 15,
                            "teeBoxes": [
                                {"par": 5, "yards": 515, "hcp": 5, "teeType": "pro"},
                                {"par": 5, "yards": 515, "hcp": 5, "teeType": "champion"},
                                {"par": 5, "yards": 495, "hcp": 5, "teeType": "men"},
                                {"par": 5, "yards": 495, "hcp": 5, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 16,
                            "teeBoxes": [
                                {"par": 4, "yards": 385, "hcp": 11, "teeType": "pro"},
                                {"par": 4, "yards": 385, "hcp": 11, "teeType": "champion"},
                                {"par": 4, "yards": 365, "hcp": 11, "teeType": "men"},
                                {"par": 4, "yards": 365, "hcp": 11, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 17,
                            "teeBoxes": [
                                {"par": 3, "yards": 175, "hcp": 15, "teeType": "pro"},
                                {"par": 3, "yards": 175, "hcp": 15, "teeType": "champion"},
                                {"par": 3, "yards": 155, "hcp": 15, "teeType": "men"},
                                {"par": 3, "yards": 155, "hcp": 15, "teeType": "women"}
                            ]
                        },
                        {
                            "hole": 18,
                            "teeBoxes": [
                                {"par": 4, "yards": 395, "hcp": 9, "teeType": "pro"},
                                {"par": 4, "yards": 395, "hcp": 9, "teeType": "champion"},
                                {"par": 4, "yards": 375, "hcp": 9, "teeType": "men"},
                                {"par": 4, "yards": 375, "hcp": 9, "teeType": "women"}
                            ]
                        }
                    ]
                }
            }
        };
        
        this.initializeElements();
        this.bindEvents();
        this.loadCourseData();
    }

    initializeElements() {
        this.courseSelect = document.getElementById('courseSelect');
        this.teeSelect = document.getElementById('teeSelect');
        this.addPlayerBtn = document.getElementById('addPlayer');
        this.scorecardBody = document.getElementById('scorecardBody');
    }

    bindEvents() {
        this.courseSelect.addEventListener('change', () => this.loadCourseData());
        this.teeSelect.addEventListener('change', () => this.updateScorecard());
        this.addPlayerBtn.addEventListener('click', () => this.addPlayer());
    }

    loadCourseData() {
        const courseId = this.courseSelect.value;
        console.log('Loading course:', courseId);
        this.courseData = this.courseDatabase[courseId];
        console.log('Course data loaded:', this.courseData);
        this.populateTeeOptions();
        this.updateScorecard();
    }

    populateTeeOptions() {
        this.teeSelect.innerHTML = '';
        this.courseData.data.holes[0].teeBoxes.forEach((tee, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = tee.teeType.toUpperCase();
            this.teeSelect.appendChild(option);
        });
    }

    updateScorecard() {
        this.scorecardBody.innerHTML = '';
        this.addInfoRow('YARDS', 'yards');
        this.addInfoRow('HANDICAP', 'hcp');
        this.addInfoRow('PAR', 'par');
        this.players.forEach(player => this.addPlayerRow(player.name));
    }

    addInfoRow(label, dataKey) {
        const row = document.createElement('tr');
        row.classList.add('info-row');
        const selectedTee = parseInt(this.teeSelect.value);
        
        let outTotal = 0;
        let inTotal = 0;

        row.innerHTML = `<td>${label}</td>`;
        
        for (let i = 0; i < 9; i++) {
            const value = this.courseData.data.holes[i].teeBoxes[selectedTee][dataKey];
            outTotal += parseInt(value) || 0;
            row.innerHTML += `<td>${value}</td>`;
        }
        
        row.innerHTML += `<td class="total-cell">${outTotal}</td>`;
        
        for (let i = 9; i < 18; i++) {
            const value = this.courseData.data.holes[i].teeBoxes[selectedTee][dataKey];
            inTotal += parseInt(value) || 0;
            row.innerHTML += `<td>${value}</td>`;
        }
        
        row.innerHTML += `
            <td class="total-cell">${inTotal}</td>
            <td class="total-cell">${outTotal + inTotal}</td>
        `;
        
        this.scorecardBody.appendChild(row);
    }

    addPlayer() {
        if (this.players.length >= this.maxPlayers) {
            alert('Maximum number of players reached!');
            return;
        }

        const playerName = prompt('Enter player name:');
        if (playerName) {
            this.players.push({ name: playerName, scores: Array(18).fill(0) });
            this.addPlayerRow(playerName);
        }
    }

    addPlayerRow(playerName) {
        const row = document.createElement('tr');
        row.classList.add('player-row');
        
        row.innerHTML = `<td><input type="text" class="player-name" value="${playerName}" readonly></td>`;
        
        for (let i = 0; i < 9; i++) {
            row.innerHTML += `<td><input type="number" min="0" data-hole="${i}"></td>`;
        }
        
        row.innerHTML += '<td class="total-cell out-total">0</td>';
        
        for (let i = 9; i < 18; i++) {
            row.innerHTML += `<td><input type="number" min="0" data-hole="${i}"></td>`;
        }
        
        row.innerHTML += `
            <td class="total-cell in-total">0</td>
            <td class="total-cell final-total">0</td>
        `;
        
        this.scorecardBody.appendChild(row);
        
        const inputs = row.querySelectorAll('input[type="number"]');
        inputs.forEach(input => {
            input.addEventListener('change', (e) => this.updatePlayerScore(row, e.target));
        });
    }

    updatePlayerScore(row, input) {
        const holeIndex = parseInt(input.dataset.hole);
        const playerIndex = Array.from(row.parentNode.children).indexOf(row) - 3;
        const score = parseInt(input.value) || 0;
        
        this.players[playerIndex].scores[holeIndex] = score;
        
        const outTotal = this.players[playerIndex].scores.slice(0, 9).reduce((a, b) => a + b, 0);
        const inTotal = this.players[playerIndex].scores.slice(9, 18).reduce((a, b) => a + b, 0);
        const finalTotal = outTotal + inTotal;
        
        row.querySelector('.out-total').textContent = outTotal;
        row.querySelector('.in-total').textContent = inTotal;
        row.querySelector('.final-total').textContent = finalTotal;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new GolfScorecard();
});

