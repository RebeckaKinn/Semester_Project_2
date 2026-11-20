# User Flows

## 1. Visitor Browsing Flow

**User:** Unregistered visitor

**Goal:** Browse, search, filter, and view auction listings without creating an account.

1. The visitor opens the homepage.
2. The application displays available auction listings.
3. The visitor can browse the listings.
4. The visitor can search for specific items using keywords.
5. The visitor selects a listing.
6. The application displays the listing details, including images, description, deadline, and bid history.

- If no listings match the search, a message is displayed.
- If the visitor attempts to place a bid, they are prompted to log in or register.
- If the visitor attempts to create a listing, they are prompted to log in or register.

---

## 2. Registration & Login Flow

**User:** Student with a valid Noroff email address

**Goal:** Create an account and access authenticated features.

### Registration

1. The visitor clicks "Register".
2. The application displays the registration form.
3. The visitor enters the required information.
4. The application validates the input.
5. The registration data is submitted to the API.
6. The application displays a success message.
7. The user is directed to the login page.

### Login

1. The user clicks "Login".
2. The application displays the login form.
3. The user enters their email and password.
4. The application sends the credentials to the API.
5. The API validates the credentials.
6. The user is authenticated.
7. The application displays authenticated navigation and the user's credit balance.

### Logout

1. The authenticated user clicks "Logout".
2. The application clears the authentication state.
3. The user is returned to the public application.
4. Authenticated features are no longer accessible.

- Invalid email domain: Display a validation error.
- Existing account: Display an appropriate registration error.
- Incorrect login credentials: Display an authentication error.

---

## 3. Profile Management Flow

**User:** Authenticated user

**Goal:** View and manage personal profile information.

1. The user logs in.
2. The user navigates to their profile page.
3. The application retrieves profile information from the API.
4. The profile displays:
   - Username
   - Avatar
   - Banner
   - Biography
   - Credit balance
   - Created listings
   - Listings the user has bid on
5. The user clicks "Edit Profile".
6. The application displays the profile editing form.
7. The user updates their biography, avatar, or banner.
8. The user clicks "Save Changes".
9. The application submits the updated information to the API.
10. The profile displays the updated information.

- Invalid input: Display a validation error.
- API request failure: Display an error message.
- No created listings: Display an empty state.
- No bidding activity: Display an empty state.

---

## 4. Listing Management Flow

**User:** Authenticated user

**Goal:** Create, update, and delete auction listings.

### Create Listing

1. The user logs in.
2. The user clicks "Create Listing".
3. The application displays the listing creation form.
4. The user enters:
   - Title
   - Description
   - Deadline date
   - Media gallery images
5. The application validates the input.
6. The user clicks "Publish Listing".
7. The application submits the listing data to the API.
8. The listing is created.
9. The user is redirected to the new listing page.

### Edit Listing

1. The user navigates to a listing they created.
2. The user clicks "Edit Listing".
3. The application displays the existing listing information.
4. The user updates the information.
5. The user clicks "Save Changes".
6. The application sends the updated information to the API.
7. The listing displays the updated information.

### Delete Listing

1. The user navigates to a listing they created.
2. The user clicks "Delete Listing".
3. The application displays a confirmation dialog.
4. The user confirms the deletion.
5. The application sends a delete request to the API.
6. The listing is removed.
7. The user is redirected to their listings overview.

- Missing required information: Display validation errors.
- Invalid deadline: Ask the user to select a valid future date.
- API request failure: Display an error message.
- Unauthorized user: Cannot access Edit or Delete button.
- Cancel deletion: Close the confirmation dialog without deleting the listing.

---

## 5. Bidding Flow

**User:** Authenticated user

**Goal:** Place bids on auction listings created by other users.

1. The user logs in.
2. The user browses or searches for listings.
3. The user selects an active auction.
4. The application displays:
   - Listing information
   - Current highest bid
   - Bid history
   - Auction deadline
   - Available credit balance
5. The user enters a bid amount.
6. The application validates the bid.
7. The user clicks "Place Bid".
8. The application submits the bid to the API.
9. The API processes the bid.
10. The application displays a confirmation message.
11. The bid history is updated.
12. The user's credit balance is refreshed.

- The user is not logged in: Prompt the user to log in.
- The user owns the listing: Has not access to Place Bid Button.
- The auction has expired: Disable bidding.
- The bid is too low: Display a validation error.
- The user has insufficient credits: Display an error message.
- The API rejects the bid: Display an appropriate error message.

---

## User Flow Summary

| Flow                 | User Type       | Main Goal                                           |
| -------------------- | --------------- | --------------------------------------------------- |
| Visitor Browsing     | Visitor         | Browse, search, filter, and view listings           |
| Registration & Login | Student         | Create an account and access authenticated features |
| Profile Management   | Registered User | View and update profile information                 |
| Listing Management   | Registered User | Create, edit, and delete listings                   |
| Bidding              | Registered User | Place bids and view bid history                     |
